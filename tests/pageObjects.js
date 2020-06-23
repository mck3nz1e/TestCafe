import { Selector } from 'testcafe';

class Page {
    constructor() {

        this.firstName = Selector('#firstName');
        this.lastName = Selector('#lastName');
        this.emailAddress = Selector('#userEmail');
        this.genderMale = Selector('#genterWrapper > .col-md-9 > :nth-child(1)');
        this.mobileNumber = Selector('#userNumber');
        this.dateSelector = Selector('#dateOfBirthInput');
        this.yearSelector = Selector('.react-datepicker__year-select');
        this.monthSelector = Selector('.react-datepicker__month-select');
        this.daySelector = Selector(':nth-child(1) > .react-datepicker__day--001')
        this.hobbySport = Selector('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
        this.currentAddress = Selector('#currentAddress')
        this.stateSelector = Selector('#stateCity-wrapper > :nth-child(2)')
        this.ncrState = Selector('#react-select-3-option-0')
        this.citySelector = Selector('#stateCity-wrapper > :nth-child(3)')
        this.delhiCity = Selector('#react-select-4-option-2')
        this.submitButton = Selector('#submit')
        this.modal = Selector('.modal')
        this.modalHeader = Selector('#example-modal-sizes-title-lg')
        this.modalCloseButton = Selector('#closeLargeModal')
    }
}

export default new Page();