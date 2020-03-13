const puppeteer = require('puppeteer');

(async () => {
  for (let i = 0; i < 80; i++) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--start-maximized']
    });

    const page = await browser.newPage();
    let element, formElement, tabs;

    await page.goto(
      `https://docs.google.com/forms/d/e/1FAIpQLSdCS0TRQWKvjkm5qUSwGTvk10FqkFaf1T0armMipZYGKBzA5w/viewform`,
      { waitUntil: 'networkidle0' }
    );

    element = await page.$x(`//*[@name="entry.719477933"]`);
    await element[0].click();

    element = await page.$x(`//*[@name="entry.719477933"]`);
    await element[0].type(`Force1`);

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[2]/div/div[2]/div/span/div/div/label/div/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(`//form[@id='mG61Hd']/div/div/div[2]/div[3]/div`);
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[3]/div/div[2]/div/span/div/div[2]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[3]/div/div[2]/div/span/div/div[3]/label/div/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(`//form[@id='mG61Hd']/div/div/div[2]/div[4]/div`);
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[4]/div/div[2]/div/span/div/div[3]/label/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[5]/div/div[2]/div[3]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[5]/div/div[2]/div[5]/div/label/div/div/div[2]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[5]/div/div[2]/div/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[6]/div/div[2]/div/span/div/div/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[7]/div/div[2]/div/span/div/div[3]/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[8]/div/div[2]/div[4]/div/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[8]/div/div[2]/div[4]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[8]/div/div[2]/div[4]/div`
    );
    await element[0].click({ clickCount: 2 });

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[8]/div/div[2]/div[3]/div/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[9]/div/div[2]/div[3]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[9]/div/div[2]/div[5]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[10]/div/div[2]/div[4]/div/label/div/div/div[2]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[10]/div/div[2]/div[2]/div/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[11]/div/div[2]/div/span/div/div/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[11]/div/div[2]/div/span/div/div[3]/label/div/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[12]/div/div[2]/div[2]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[12]/div/div[2]/div[5]/div/label/div/div/div[2]`
    );
    await element[0].click();

    element = await page.$x(`//*[@id="i195"]`);
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[13]/div/div[2]/div/span/div/div[2]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[13]/div/div[2]/div/span/div/div[3]/label/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[14]/div/div[2]/div/span/div/div[2]/label/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[15]/div/div[2]/div[2]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[15]/div/div[2]/div[3]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[16]/div/div[2]/div/span/div/div[3]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[17]/div/div[2]/div[3]/div/label/div/div/div[2]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[18]/div/div[2]/div[2]/div/label/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div/div[6]/span/div[3]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div/div[2]/span/div[4]/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div/div[4]/span/div[5]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div/div[10]/span/div[5]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div/div[8]/span/div[4]/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[19]/div/div[2]/div/div/div/div[12]/span/div[5]/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[20]/div/div[2]/div/span/div/div/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[21]/div/div[2]/div/span/div/div[2]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[22]/div/div[2]/div/span/div/div[2]/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[23]/div/div[2]/div/span/div/div[3]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[24]/div/div[2]/div/span/div/div/label/div/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[25]/div/div[2]/div[4]/div/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[2]/span/div[2]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[6]/span/div[4]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[10]/span/div[5]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[8]/span/div[4]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[8]/span/div[4]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[6]/span/div[3]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[4]/span/div[4]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[4]/span/div[4]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[26]/div/div[2]/div/div/div/div[10]/span/div[5]/div/div/div[3]`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[27]/div/div[2]/div/span/div/div[2]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[27]/div/div[2]/div/span/div/div[5]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[28]/div/div[2]/div/span/div/div[2]/label/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[29]/div/div[2]/div/span/div/div[2]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[30]/div/div[2]/div/span/div/div/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[31]/div/div[2]/div/span/div/div[2]/label`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[32]/div/div[2]/div/span/div/div[3]/label/div/div[2]/div/span`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[2]/div[33]/div/div[2]/div/span/div/label[5]/div[2]/div/div/div[3]/div`
    );
    await element[0].click();

    element = await page.$x(
      `//form[@id='mG61Hd']/div/div/div[3]/div/div/div/span/span`
    );
    await element[0].click();
    // await console.log('CHEKC FIREW');

    //   element = await page.$x(`//a[contains(text(),'Submit another response')]`);
    //   await element[0].click();

    await browser.close();

    await console.log('Response ', i, ' Sent');
  }
})();
