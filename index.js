// Your code here
let employee= (["firstName","familyName","title", 1, timeInEvents[''], timeOutEvents['']])
function createEmployeeRecord(employee){
return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}
function createEmployeeRecords(employeeData){
   return  employeeData.map(employee=> {
        createEmployeeRecord(employee)
    });
}

function createTimeInEvent(employee, datestamp){
    let [date, hour] =datestamp.split("")
    hour = parseInt(hour)
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: date,
    })
    return employee;
}

function createTimeOutEvent(employee, datestamp){
    let [date, hour] =datestamp.split("")
    hour = parseInt(hour)
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: date,
    })
    return employee;
}
function hoursWorkedOnDate(employee, date) {
    let inEvent = employee.timeInEvents.find((e) => e.date === date)
    let outEvent = employee.timeOutEvents.find((e) => e.date === date)
    return (outEvent.hour - inEvent.hour)/100

    
}


function wagesEarnedOnDate(record, date) {
    return hoursWorkedOnDate(record, date) * record.payPerHour;
}

function allWagesFor(record) {
    const reducer = (accumulator, timeIn) => accumulator + wagesEarnedOnDate(record, timeIn.date);
    return record.timeInEvents.reduce(reducer, 0);
}

function calculatePayroll(records) {
    const reducer = (accumulator, record) => accumulator + allWagesFor(record);
    return records.reduce(reducer, 0);
}

function findEmployeeByFirstName(employes, name) {
    return employes.find(emp => emp.firstName === name);
}