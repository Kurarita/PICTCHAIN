#pragma strict

private static var MyInstance : GameParameter;

public static function GetInstance()
{
	if (MyInstance == null)
	{
		var obj = new GameObject("GameParameter");
		MyInstance = obj.AddComponent("GameParameter");
	}
	
	return MyInstance;
}

function Awake() {
}

function Start () {

}

function Update () {

}