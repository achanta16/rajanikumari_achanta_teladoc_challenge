package StepDefinitions;

import cucumber.api.java.en.*;
import cucumber.api.junit.Cucumber;

import java.io.IOException;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.support.ui.Select;
import base.Base;
import pageObjects.*;


@RunWith(Cucumber.class)
public class StepDefinition extends Base {

	public Homepage hp;
	public Adduserdetails add;


	@Given("^User is on the homepage$")
	public void user_is_on_the_homepage() throws IOException {
		driver=Base.initDriver();
		Assert.assertTrue(driver.getCurrentUrl().equalsIgnoreCase(url));
	}

	@When("user clicks Add User")
	public void user_clicks_add_user() {
		hp=new Homepage(driver);
		hp.adduser().click();
	}

	@And("^enters (.+),(.+),(.+),(.+),(.+),(.+),(.+),(.+)$")
	public void enters_(String firstname, String lastname, String username, String password,String radio, String role, String email, String cellphone) throws Throwable {
		add=new Adduserdetails(driver);
		add.Firstname().sendKeys(firstname);
		add.Lastname().sendKeys(lastname);
		add.Username().sendKeys(username);
		add.Password().sendKeys(password);

		if(radio.equalsIgnoreCase("Company AAA"))
		add.radio1().click();
		else if(radio.equalsIgnoreCase("Company BBB"));	
		add.radio2().click();

		Select roles=new Select(add.Roles());
		roles.selectByVisibleText(role);
		add.Email().sendKeys(email);
		add.Mobile().sendKeys(cellphone);
		add.Save().click();
	}

	@Then("^(.+) has to be successfully added to the table$")
	public void has_to_be_successfully_added_to_the_table(String user) throws Throwable {

		Assert.assertTrue(driver.findElement(By.xpath("//table/tbody/tr/td[contains(text(),'"+user+"')]")).getText().equalsIgnoreCase(user));
	}


	@When("^user clicks x button for username novak$")
	public void user_clicks_x_button_for_username_novak() throws Throwable {
		hp=new Homepage(driver);
		hp.delete().click();
		hp.OK().click();
	}

	@Then("^novak should be deleted$")
	public void novak_should_be_deleted() throws Throwable {
		try {
			Assert.assertFalse(hp.deleteuser().isDisplayed());
		}
		catch(NoSuchElementException e) {
			Assert.assertFalse(false);
		}

	}
}




