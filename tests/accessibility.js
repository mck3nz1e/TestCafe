import { axeCheck, createReport } from 'axe-testcafe';

fixture`Practice Form - Accessibility Tests`
    .page`http://www.demoqa.com/automation-practice-form`;

test('Automated accessibility testing', async t => {
    const axeContext = { exclude: [['select']] };
    const axeOptions = {
        runOnly: {
            type: 'tag',
            values: ['wcag2aa','wcag2a']
        }
    };
    const { error, violations } = await axeCheck(t, axeContext, axeOptions);
    await t.expect(violations.length === 0).ok(createReport(violations));
})