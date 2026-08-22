param(
  [Parameter(Mandatory = $true)][string]$Source,
  [Parameter(Mandatory = $true)][string]$Output
)

Add-Type -AssemblyName System.Drawing

$width = 1672
$height = 941
$canvas = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$photo = [System.Drawing.Image]::FromFile($Source)
$graphics.DrawImage($photo, 0, 0, $width, $height)

$cream = [System.Drawing.Color]::FromArgb(248, 244, 234)
$ink = [System.Drawing.Color]::FromArgb(20, 60, 49)
$gold = [System.Drawing.Color]::FromArgb(199, 145, 43)
$sage = [System.Drawing.Color]::FromArgb(119, 140, 111)

$creamBrush = New-Object System.Drawing.SolidBrush($cream)
$sageBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, $sage))
$graphics.FillRectangle($creamBrush, 0, 0, 880, $height)
$graphics.FillEllipse($creamBrush, 690, -80, 390, 1100)
$graphics.FillEllipse($sageBrush, -250, 760, 980, 380)

$titleFont = New-Object System.Drawing.Font('Georgia', 104, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$subFont = New-Object System.Drawing.Font('Arial', 41, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$creditFont = New-Object System.Drawing.Font('Arial', 16, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$inkBrush = New-Object System.Drawing.SolidBrush($ink)
$goldPen = New-Object System.Drawing.Pen($gold, 3)
$creditBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(105, 120, 111))

$graphics.DrawString('Everyday', $titleFont, $inkBrush, 82, 150)
$graphics.DrawString('Strong with Robin', $titleFont, $inkBrush, 82, 275)
$graphics.DrawLine($goldPen, 92, 515, 860, 515)
$graphics.DrawString('Private in-home & virtual coaching', $subFont, $inkBrush, 85, 560)
$graphics.DrawString('Photo: Vitaly Gariev / Unsplash', $creditFont, $creditBrush, 87, 675)

$canvas.Save($Output, [System.Drawing.Imaging.ImageFormat]::Png)

$creditBrush.Dispose()
$goldPen.Dispose()
$inkBrush.Dispose()
$creditFont.Dispose()
$subFont.Dispose()
$titleFont.Dispose()
$sageBrush.Dispose()
$creamBrush.Dispose()
$photo.Dispose()
$graphics.Dispose()
$canvas.Dispose()
