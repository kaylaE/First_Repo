package AutoTest.OurFirstProject;

import org.junit.Assert;
import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef extends drivers {
	

	// 3 types of selectors been used, name,Link text and Id
	
	@Given("^am on the Landing Page$")
	public void am_on_the_Landing_Page() throws Throwable {
	    driver.manage().window().maximize();
		driver.get("http://automatetillinfinity.co.uk/");  
	}

	@When("^I enter my username and password$")
	public void i_enter_my_username_and_password() throws Throwable {
	   driver.findElement(By.id("usernamelogin")).sendKeys("wegit"); 
	   driver.findElement(By.name("passwd")).sendKeys("12345678");
	}

	@When("^I click Login button$")
	public void i_click_Login_button() throws Throwable {
	  driver.findElement(By.id("LoginBtn")).click(); 
	}

	@Then("^I should see the Home Page$")
	public void i_should_see_the_Home_Page() throws Throwable {
	   String Main_title = driver.getTitle();
	   String Expected_Title = "Home";
	   Assert.assertEquals(Main_title,Expected_Title);
	}
	@Then("^I click logout$")
	public void i_click_logout() throws Throwable {
	   driver.findElement(By.linkText("Logout")).click();
	}

	@Then("^I should be on the Landing Page$")
	public void i_should_be_on_the_Landing_Page() throws Throwable {
		String Main_title = driver.getTitle();
	    String Expected_Title = "Login";
	    Assert.assertEquals(Main_title,Expected_Title);
	}
	

}




