import fixDateFormat from './fixDateFormat';

describe('fixDateFormat', () => {
	it('should change dd-mm-yyyy to yyyy-mm-dd', () => {
		const badDate = '27-01-2018T12:34';
		const expectedDate = '2018-01-27T12:34';
		const fixedDate = fixDateFormat(badDate);
		expect(fixedDate).toBe(expectedDate);
	});

	it('should left pad hours below 10', () => {
		const badDate = '01-12-2017T9:36';
		const expectedDate = '2017-12-01T09:36';
		const fixedDate = fixDateFormat(badDate);
		expect(fixedDate).toBe(expectedDate);
	});
});
