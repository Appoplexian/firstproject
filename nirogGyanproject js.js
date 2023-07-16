function appendprescription(data) {
    let numberofmedications = document.getElementById("numberofmedications")
    numberofmedications.textContent = data.length - 1
    let patientName = document.getElementById("patientName")
    patientName.textContent = data[0].patient_name
    let dob = document.getElementById("dateOfBirth")
    dob.textContent = data[0].date_of_birth
    let dateOfIssue = document.getElementById("dateOfIssue")
    dateOfIssue.textContent = data[0].date_of_issue
    let medicine1 = document.getElementById("medication1").textContent = data[1].medicine.toUpperCase()
    let reason1 = document.getElementById("reason1").textContent = data[1].reason
    let presc=document.getElementById("prescription").textContent=data[1].prescription
     let medicine2 = document.getElementById("medication2").textContent = data[2].medication.toUpperCase()
    let reason2 = document.getElementById("reason2").textContent = data[2].reason
    let presc2=document.getElementById("prescription2").textContent=data[2].prescription.substring(22,data[2].prescription.length)
     let medicine3 = document.getElementById("medication3").textContent = data[3].medicine.toUpperCase()
    let reason3 = document.getElementById("reason3").textContent = data[3].reason
    let presc3=document.getElementById("prescription3").textContent=data[3].prescription.substring(2,data[2].prescription.length)
}
let options = {
    method: "GET"
}
fetch("https://api.jsonbin.io/v3/b/64b2a1d5b89b1e2299bf5584", options)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log((data["record"]))
        appendprescription(data["record"])
    })