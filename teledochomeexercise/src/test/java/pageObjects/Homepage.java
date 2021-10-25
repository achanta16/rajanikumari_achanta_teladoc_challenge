package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Homepage {
	
public WebDriver driver;
	
	public Homepage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="//button[@class='btn btn-link pull-right']")
	WebElement adduser;
	
	@FindBy(xpath="//td[text()='novak']")
	WebElement deleteuser;
	
	@FindBy(xpath="//td[text()='novak']/following-sibling::td[8]/button")
	WebElement delete;
	
	@FindBy(xpath="//button[text()='OK']")
	WebElement OK;
	
	public WebElement adduser() {
		return adduser;
	}
	
	public WebElement deleteuser() {
		return deleteuser;
	}
	
	public WebElement delete() {
		return delete;
	}
	
	public WebElement OK() {
		return OK;
	}
	
	
	
}
