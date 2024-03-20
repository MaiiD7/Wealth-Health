import dayjs from "dayjs";

// Columns used in DataGrid.jsx
export const columns = [
  { field: 'firstName', headerName: 'First name', flex:  1 },
  { field: 'lastName', headerName: 'Last name', flex:  1 },
  { field: 'birthDate', headerName: 'Date of Birth', flex:  1, valueFormatter: params => dayjs(params?.value).format('DD/MM/YYYY') },
  { field: 'department', headerName: 'Department', flex:  1 },
  { field: 'startDate', headerName: 'Start Date', flex:  1, valueFormatter: params => dayjs(params?.value).format('DD/MM/YYYY') },
  { field: 'address', headerName: 'Adress', flex:  1 },
  { field: 'city', headerName: 'City', flex:  1 },
  { field: 'state', headerName: 'State', flex:  1 },
  { field: 'zipCode', headerName: 'Zip Code', flex:  1 }
];

// U.S. States used in a select in HomeGrid.jsx
export const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Federated States Of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

// Business departments used in a select in HomeGrid.jsx
export const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Ressources",
  "Legal"
]

// Initial State for employee annotation
export const initialFormState = {
  id: crypto.randomUUID(),
  gender: "female",
  genderData: "Non-Binary",
  firstName: "",
  lastName: "",
  birthDate: null,
  address: "",
  city: "",
  zipCode: "",
  state: states[0],
  startDate: null,
  department: departments[0],
}