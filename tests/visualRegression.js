import { takeSnapshot } from 'testcafe-blink-diff';
import page from './pageObjects'

fixture`Practice Form - Visual Regression Tests`
    .page`http://www.demoqa.com/automation-practice-form`;

test('Verify no visual regression on practice form', async t => {

    await t
        .expect(page.firstName.visible).ok()

    await takeSnapshot(t);
})