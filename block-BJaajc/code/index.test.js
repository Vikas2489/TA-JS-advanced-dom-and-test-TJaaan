const { getFullName, getArea, getCircumfrence } = require("./index");

// getFullName
test("Arya Stark", () => {
    expect(getFullName("Arya", "Stark")).toBe("Arya Stark");
})

test("Arya Stark", () => {
    expect(getFullName("Arya", "Stark")).not.toBe("Stark");
})

test("Vikas Kumar", () => {
    expect(getFullName("Vikas", "Kumar")).not.toBe("Vikas Kumat");
})

test("Vikas Kumar", () => {
    expect(getFullName("Vikas", "Kumar")).toBe("Vikas Kumar");
})

test("Raju Singh", () => {
    expect(getFullName("Raju", "Singh")).toBe("Raju Singh");
})

test("Raju Singh", () => {
    expect(getFullName("Raju", "Singh")).not.toBe("RajuSingh");
})


// getArea

test("area of circle with radius 2", () => {
    expect(getArea(2)).not.toBe(12);
})

test("area of circle with radius 2", () => {
    expect(getArea(2)).toBe('The area is 12.566370614359172');
})

test("area of radius 12", () => {
    expect(getArea(12)).not.toBe(12);
})

test("area of circle with radius 12", () => {
    expect(getArea(12)).toBe('The area is 452.3893421169302');
})

// getCircumference

test('circumference with 2', () => {
    expect(getCircumfrence(2)).toBe('The circumference is 12.566370614359172');
})


test('circumference with 2', () => {
    expect(getCircumfrence(2)).not.toBe('The circumference is 122');
})