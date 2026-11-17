# Servidor local mínimo para probar el sitio (no hace falta Node).
# Uso: powershell -ExecutionPolicy Bypass -File servidor.ps1 [-Puerto 8080]
param([int]$Puerto = 8080)
$raiz = [IO.Path]::GetFullPath($PSScriptRoot).TrimEnd('\') + '\'   # con separador final: evita servir carpetas hermanas como "sitio-x"
$tipos = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".svg"="image/svg+xml"; ".jpg"="image/jpeg"; ".png"="image/png"; ".pdf"="application/pdf"; ".json"="application/json" }
$http = New-Object System.Net.HttpListener
$http.Prefixes.Add("http://localhost:$Puerto/")
$http.Start()
Write-Host "PROTOTYPE POCKET en http://localhost:$Puerto/"
while ($http.IsListening) {
  $ctx = $http.GetContext()
  $ruta = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ($ruta -eq "") { $ruta = "index.html" }
  $archivo = [IO.Path]::GetFullPath((Join-Path $raiz $ruta))
  if ($archivo.StartsWith($raiz, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path $archivo -PathType Leaf)) {
    $bytes = [IO.File]::ReadAllBytes($archivo)
    $ext = [IO.Path]::GetExtension($archivo).ToLower()
    $ctx.Response.ContentType = $(if ($tipos[$ext]) { $tipos[$ext] } else { "application/octet-stream" })
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else { $ctx.Response.StatusCode = 404 }
  $ctx.Response.Close()
}
