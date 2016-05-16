var hWndEdit=AkelPad.GetEditWnd();

if ((! hWndEdit) || AkelPad.GetEditReadOnly(hWndEdit))
  WScript.Quit();
  
  
function FromToData(from,to)
{
	this.from = from;
	this.to = to;
}

var dataContainer = [

{from: "ACCADEMIA", to: "ACADM"},
{from: "ACER", to: "ACER"},
{from: "ART_FACT", to: "A_FAC"},
{from: "ART_WOMEN", to: "A_WOM"},
{from: "ARTZ_MODEL", to: "A_MOD"},
{from: "ASUS", to: "ASUS"},
{from: "LOMBARDINI", to: "LMBRD"},
{from: "B&W", to: "B&W"},
{from: "BALDAN", to: "BLDAN"},
{from: "BALDININI", to: "BALDI"},
{from: "BALLIN", to: "BALLI"},
{from: "BIKKEMBRGS", to: "BIKKE"},
{from: "BYBLOS", to: "BBLOS"},
{from: "CALV_KLEIN", to: "C_KLN"},
{from: "CAMEL", to: "CAMEL"},
{from: "CAPOVERSO", to: "CPVRS"},
{from: "CARLING", to: "CARLN"},
{from: "CASHMERE", to: "CSHMR"},
{from: "CERRUTI", to: "CRR"},
{from: "CERRUT1881", to: "CRR18"},
{from: "DIOR", to: "DIOR"},
{from: "CK", to: "CK"},
{from: "R_CAVALLI", to: "R_CAV"},
{from: "CONVERSE", to: "CNVE"},
{from: "COSIMO_G.", to: "COSIM"},
{from: "D&G", to: "D&G"},
{from: "DONDUP", to: "DONDU"},
{from: "E_FRANCHI", to: "FRANC"},
{from: "ESPRIT", to: "ESPRI"},
{from: "EST_CULTO", to: "CULTO"},
{from: "FABI", to: "FABI"},
{from: "FASHION", to: "FASHN"},
{from: "FERAUD", to: "FERAU"},
{from: "FERRARI", to: "FRRAR"},
{from: "FERRE", to: "FERRE"},
{from: "FOREVER21", to: "FOR21"},
{from: "FOSSIL", to: "FOSIL"},
{from: "GAS", to: "GAS"},
{from: "G-CUBE", to: "G-CUB"},
{from: "GIUDI", to: "GIUDI"},
{from: "GUYLAROCHE", to: "LAROC"},
{from: "H&M", to: "H&M"},
{from: "HEXELINE", to: "HEXEL"},
{from: "HUGO_BOSS", to: "HBOSS"},
{from: "JAC_ZOLTY", to: "ZOLTY"},
{from: "J_GAULTIER", to: "GAULT"},
{from: "J_CAMPBELL", to: "CAMPB"},
{from: "JEN_LOPEZ", to: "LOPEZ"},
{from: "J_GALLIANO", to: "GALLI"},
{from: "JOOP!", to: "JOOP!"},
{from: "J_COUTURE", to: "JCOUT"},
{from: "J_CAVALLI", to: "J_CAV"},
{from: "KENZO", to: "KENZO"},
{from: "LACOSTE", to: "LACST"},
{from: "LAGERFELD", to: "LAGER"},
{from: "BIAGIOTTI", to: "BIAGI"},
{from: "LENOVO", to: "LENOV"},
{from: "LG", to: "LG"},
{from: "LIU*JO", to: "LIUJO"},
{from: "MARC", to: "MARC"},
{from: "M.PROFUMI", to: "M.PRO"},
{from: "M_FABIANI", to: "MFABI"},
{from: "MAS_TRULLI", to: "MTRUL"},
{from: "MAXMARA", to: "MMARA"},
{from: "MICH_KORS", to: "MKORS"},
{from: "MORESCHI", to: "MORES"},
{from: "MOTIVI", to: "MOTIV"},
{from: "NORTHLAND", to: "NORTH"},
{from: "ONKYO", to: "ONKYO"},
{from: "PANASONIC", to: "PNSNC"},
{from: "PASOTTI", to: "PASOT"},
{from: "PINKO", to: "PINKO"},
{from: "PLEASE", to: "PLEASE"},
{from: "RED", to: "RED"},
{from: "REEBOK", to: "REEBO"},
{from: "RINSCIMNT", to: "RINSC"},
{from: "RIPA", to: "RIPA"},
{from: "R_CAVALLI", to: "R_CAV"},
{from: "ROY_ROBSON", to: "RROBS"},
{from: "SAMSUNG", to: "SMSNG"},
{from: "S_STICKER", to: "SSTIC"},
{from: "SIEMENS", to: "SIEME"},
{from: "SILHOUETTE", to: "SILHO"},
{from: "SIL_HEACH", to: "SHEAC"},
{from: "SONY_STR", to: "SONY"},
{from: "SPORT_SHOW", to: "SSHOW"},
{from: "STEFANEL", to: "STEFA"},
{from: "T_HILFIGER", to: "THILF"},
{from: "UPS", to: "UPS"},
{from: "VERA_PELLE", to: "VPELL"},
{from: "VERIFONE", to: "VERIF"},
{from: "VERSACE", to: "VRSAC"},
{from: "VIEWSONIC", to: "VSONI"},
{from: "ZARA", to: "ZARA"},
{from: "ZARA_KNIT", to: "ZA_KN"},
{from: "ZEBEX3100", to: "ZEBEX"},
{from: "ã_ÑáìçÑáÄ", to: "ÑáìçÑ"},
]; 
 
  
  
if (hWndEdit)
{

	for(var i=0; i< dataContainer.length;++i)
	{
		if (dataContainer[i]!=null)
			AkelPad.TextReplace(hWndEdit, dataContainer[i].from + "\r", dataContainer[i].to + "\r", 0x00200001 /*FRF_DOWN|FRF_BEGINNING*/, true);
	
	}


} 