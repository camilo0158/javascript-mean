const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res) => {
   const employees = await Employee.find();
   res.json(employees);
}

employeeCtrl.getEmployee = async (req, res) => {
    //console.log(req.params.id);    
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.editEmployee = async (req, res) => {
    const {id} = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json('employee update');

}

employeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json(
        {
        'status': 'employee saved'
        }
    );
}

employeeCtrl.deleteEmployee = async (req, res) => {
    const {id} = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({
        status: 'Employee deleted'        
    });
}

module.exports = employeeCtrl;