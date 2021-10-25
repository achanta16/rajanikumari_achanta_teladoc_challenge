package StepDefinitions;


import base.Base;
import cucumber.api.java.After;

public class Hooks extends Base {

		
	@After
	public void teardown() {
		driver.close();
	}
}
