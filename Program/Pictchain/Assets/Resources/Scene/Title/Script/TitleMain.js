#pragma strict

public enum SceneState
{
	Default = 0,	//Draw InputText
	MenuWindow,		//Draw MenuWindow
	Option,			//Draw Option
};

//public variables
public var Title : Transform;
public var MenuWindow : Transform;
public var OptionMenu : Transform;

//private variables
private var State : SceneState;
private var objTitle : GameObject;
private var objMenu : GameObject;
private var objOption : GameObject;
private var bStart;

function Awake () {
}

function Start () {
	bStart = false;
}

function Update () {
}

function OnGUI () {
	if (Input.GetMouseButtonDown(0) && bStart == false)
	{
		bStart = true;
		GameStart();
	}
}

function GameStart()
{
	Application.LoadLevel("Game");
}