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

function Awake () {
	State = SceneState.Default;
	//Instantiate Title
	objTitle = Instantiate(Title) as GameObject;
	Destroy(objTitle);
}

function Start () {
}

function Update () {
	if (Input.GetMouseButtonDown(0))
	{
		ChangeState(SceneState.MenuWindow);
	}
}

function OnGUI () {
}

function ChangeState(state : SceneState)
{
	if (State == state) return;
	
	State = state;
	
	switch(State)
	{
		case SceneState.Default:
			Debug.Log("State : Default");
			break;
		case SceneState.MenuWindow:
			Debug.Log("State : MenuWindow");
			//Destroy Title
			Destroy(objTitle);
			//completely delete by substitution null
			objTitle = null;
			//Instantiate MenuWindow
			objMenu = Instantiate(MenuWindow) as GameObject;
			break;
		case SceneState.Option:
			Debug.Log("State : Option");
			break;
	}
}

function GameStart()
{
	Application.LoadLevelAsync("Game");
}