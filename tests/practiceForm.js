import { Selector } from 'testcafe';
import page from './pageObjects'

fixture`Practice Form - End to End Tests`
    .page`http://www.demoqa.com/automation-practice-form`;

const monthOption = page.monthSelector.find('option')
const yearOption = page.yearSelector.find('option')

test('Happy Path Test', async t => {

    await t
        .typeText(page.firstName, 'Scott')
        .typeText(page.lastName, 'McKenzie')
        .typeText(page.emailAddress, 'testing@test.co.uk')
        .click(page.genderMale)
        .typeText(page.mobileNumber, '07123456789')
        .click(page.dateSelector)
        .click(page.monthSelector).click(monthOption.withText('January'))
        .click(page.yearSelector).click(yearOption.withText('1980'))
        .click(page.daySelector)
        .click(page.hobbySport)
        .typeText(page.currentAddress, '21 Test Street \nTest Town')
        .click(page.stateSelector).click(page.ncrState)
        .click(page.citySelector).click(page.delhiCity)
        .click(page.submitButton)

        .expect(page.modal.visible).ok()
        .expect(page.modalHeader.innerText).eql('Thanks for submitting the form')
        .click(page.modalCloseButton)
        .expect(page.modal.visible).notOk()
});