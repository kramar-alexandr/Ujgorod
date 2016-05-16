var hWndEdit=AkelPad.GetEditWnd();

if ((! hWndEdit) || AkelPad.GetEditReadOnly(hWndEdit))
  WScript.Quit();
  
if (hWndEdit)
{
	AkelPad.TextReplace(hWndEdit, "(", "\t", 0x00200001 /*FRF_DOWN|FRF_BEGINNING*/, true);
	AkelPad.TextReplace(hWndEdit, ";", "\t", 0x00200001 /*FRF_DOWN|FRF_BEGINNING*/, true);
	AkelPad.TextReplace(hWndEdit, ")", "\t", 0x00200001 /*FRF_DOWN|FRF_BEGINNING*/, true);
}  