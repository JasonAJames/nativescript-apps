package com.tns.gen.android.widget;

public class RadioGroup_OnCheckedChangeListener implements android.widget.RadioGroup.OnCheckedChangeListener {
	public RadioGroup_OnCheckedChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onCheckedChanged(android.widget.RadioGroup param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onCheckedChanged", void.class, args);
	}

}
