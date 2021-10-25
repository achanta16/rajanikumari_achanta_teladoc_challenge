package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class Adduserdetails {
	
	public WebDriver driver;
	public Adduserdetails(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="//input[@name='FirstName']")
	WebElement Firstname;
	
	@FindBy(xpath="//input[@name='LastName']")
	WebElement Lastname;
	
	@FindBy(xpath="//input[@name='UserName']")
	WebElement Username;
	
	@FindBy(xpath="//input[@type='password']")
	WebElement Password;
	
	@FindBy(xpath="//label/input[@value='15']")
	WebElement radio1;
	
	@FindBy(xpath="//label/input[@value='16']")
	WebElement radio2;
	
	@FindBy(xpath="//label[@class='radio ng-scope ng-binding']")
	WebElement Customer;
	
	@FindBy(xpath="//label[@class='radio ng-scope ng-binding']")
	WebElement Company;
	
	@FindBy(xpath="//select[@name='RoleId']")
	WebElement Roles;
	
	@FindBy(xpath="//button[@ng-click='save(user)']")
	WebElement Save;

	
	@FindBy(xpath="//input[@name='Email']")
	WebElement Email;
	
	@FindBy(xpath="//input[@name='Mobilephone']")
	WebElement Mobilephone;
		
	public WebElement Firstname() {
		return Firstname;
	}
	
	public WebElement Lastname() {
		return Lastname;
	}
	
	public WebElement Username() {
		return Username;
	}
	
	public WebElement Password() {
		return Password;
	}
	
	public WebElement radio1() {
		return radio1;
	}
	
	public WebElement radio2() {
		return radio2;
	}
	
	public WebElement Customer() {
		return Customer;
	}
	
	public WebElement Email() {
		return Email;
	}
	
	public WebElement Roles() {
			return Roles;
	}
	
	public WebElement Mobile() {
		return Mobilephone;
	}
	
	public WebElement Save() {
		return Save;
	}
	
	

}

