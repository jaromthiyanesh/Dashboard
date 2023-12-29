import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Crud = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', gender: 'Male', admitDate: '2023-12-29', disease: 'Fever', doctor: 'Dr. Smith', actions: 'Prescription' },
    // Add more patient data as needed
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '',
    gender: '',
    admitDate: '',
    disease: '',
    doctor: '',
    actions: '',
  });

  const [editingPatient, setEditingPatient] = useState(null);
  const [requiredFields, setRequiredFields] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleCancel = () => {
    // Reset the form or perform any other actions on cancel
    setNewPatient({
      name: '',
      gender: '',
      admitDate: '',
      disease: '',
      doctor: '',
      actions: '',
    });
    setEditingPatient(null);
    setRequiredFields([]);
  };

  const handleSubmit = () => {
    const requiredFieldsList = ['name', 'gender', 'admitDate', 'disease', 'doctor'];

    // Check if required fields are filled
    const missingFields = requiredFieldsList.filter((field) => !newPatient[field]);

    if (missingFields.length > 0) {
      // Set the list of missing required fields
      setRequiredFields(missingFields);
    } else {
      if (editingPatient) {
        // Editing existing patient data
        setPatients((prevPatients) =>
          prevPatients.map((patient) =>
            patient.id === editingPatient.id ? { ...patient, ...newPatient } : patient
          )
        );
        setEditingPatient(null);
      } else {
        // Adding new patient data
        setPatients((prevPatients) => [...prevPatients, { id: prevPatients.length + 1, ...newPatient }]);
      }

      // Reset the form after submission
      handleCancel();
    }
  };

  const handleEdit = (patient) => {
    // Set the form fields for editing
    setNewPatient({ ...patient });
    setEditingPatient(patient);
    setRequiredFields([]);
  };

  const handleDelete = (id) => {
    // Delete patient data
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
  };

  return (
    <div>
      <div className='2xl:container py-5 bg-customColor'>
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-10 '>
          <div className='col-span-1 lg:col-span-1 2xl:col-span-1'>
            <div className='bg-white p-8 rounded-3xl space-y-4'>
              <div className='flex flex-col justify-center items-center space-y-1'>
                <h3 className='font-bold text-2xl'>Admit Card</h3>
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold text-xl'>Patient Name</h3>
                <input
                  placeholder='Name'
                  className={`border w-[90%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('name') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='name'
                  value={newPatient.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold text-xl'>Gender</h3>
                <input
                  placeholder='Gender'
                  className={`border w-[90%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('gender') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='gender'
                  value={newPatient.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold text-xl'>Admit Date</h3>
                <input
                  placeholder='Admit Date'
                  className={`border  w-[90%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('admitDate') ? 'border-red-500' : ''
                  }`}
                  type='date'
                  name='admitDate'
                  value={newPatient.admitDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold text-xl'>Disease</h3>
                <input
                  placeholder='Disease'
                  className={`border w-[90%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('disease') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='disease'
                  value={newPatient.disease}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col justify-start items-start space-y-1'>
                <h3 className='font-bold text-xl'>Doctor</h3>
                <input
                  placeholder='Doctor'
                  className={`border w-[90%] h-10 p-5 rounded-xl ${
                    requiredFields.includes('doctor') ? 'border-red-500' : ''
                  }`}
                  type='text'
                  name='doctor'
                  value={newPatient.doctor}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex justify-center items-center gap-4'>
                <button
                  onClick={handleCancel}
                  className='px-4 py-2 lg:px-8 lg:py-2 text-white bg-red-600 rounded-full text-xl transform hover:scale-110 transition-transform duration-300 hover:bg-red-600 hover:text-white'
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className='px-4 py-2 lg:px-8 lg:py-2 text-white bg-green-600 rounded-full text-xl transform hover:scale-110 transition-transform duration-300 hover:bg-green-600 hover:text-white'
                >
                  {editingPatient ? 'Update' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-2 2xl:col-span-2'>
            <div className='bg-white flex flex-row p-8 justify-between rounded-3xl items-start h-[100%]'>
              <table className='w-full '>
                <thead>
                  <tr>
                    <th className='border lg:px-4 hidden xl:table-cell lg:py-2  px-2 py-1'>ID</th>
                    <th className='border lg:px-4  lg:py-2 px-2 py-1'>Name</th>
                    <th className='border lg:px-4 hidden xl:table-cell lg:py-2  px-2 py-1'>Gender</th>
                    <th className='border lg:px-4 lg:py-2 px-2 py-1'>Admit Date</th>
                    <th className='border lg:px-4 lg:py-2 px-2 py-1'>Disease</th>
                    <th className='border lg:px-4 hidden xl:table-cell lg:py-2  px-2 py-1'>Doctor</th>
                    <th className='border lg:px-4 lg:py-2 px-2 py-1'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className='text-center'>
                      <td className='border lg:px-4 hidden xl:table-cell lg:py-2  px-2 py-1'>{patient.id}</td>
                      <td className='border lg:px-4  lg:py-2 px-2 py-1'>{patient.name}</td>
                      <td className='border lg:px-4 hidden xl:table-cell lg:py-2  px-2 py-1'>{patient.gender}</td>
                      <td className='border lg:px-4  lg:py-2 px-2 py-1'>{patient.admitDate}</td>
                      <td className='border lg:px-4  lg:py-2 px-2 py-1'>{patient.disease}</td>
                      <td className='border lg:px-4 hidden xl:table-cell lg:py-2  px-2 py-1'>{patient.doctor}</td>
                      <td className='border lg:px-4  lg:py-2 px-2 py-1'>
                        <button
                          onClick={() => handleEdit(patient)}
                          className='mr-2 text-blue-500 hover:text-blue-700'
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDelete(patient.id)}
                          className='text-red-500 hover:text-red-700'
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
