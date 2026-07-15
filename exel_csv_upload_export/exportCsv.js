// 1. Dummy Data jo hume export karna hai
const students = [
  { name: "Rahul", age: 20, feeStatus: "Pending" },
  { name: "Amit", age: 22, feeStatus: "Paid" },
  { name: "Priya", age: 21, feeStatus: "Pending" }
];

function exportToCSV(dataArray) {
  // STEP A: Excel/CSV ki pehli line (Headers) banayi
  const headers = "Name,Age,Fee Status\n";
  
  // STEP B: Har student ke object ko comma-separated string mein badla
  const rows = dataArray.map(student => {
    return `${student.name},${student.age},${student.feeStatus}`;
  });
  
  // STEP C: Saari rows ko line break (\n) se jodkar ek lambi string banayi
  const csvContent = headers + rows.join("\n");
  
  // ==========================================
  // 🔥 DOWNLOAD WALA MAGIC LOGIC (Browser standard)
  // ==========================================
  
  // 1. Blob (Binary Large Object) banaya - isse raw text file mein convert hota hai
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // 2. Browser ke andar ek temporary download URL link banaya
  const url = URL.createObjectURL(blob);
  
  // 3. Parde ke peeche (hidden) ek <a> tag create kiya download karne ke liye
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "student_report.csv"); // File ka naam set kiya
  
  // 4. Link par click kiya aur download start!
  document.body.appendChild(link);
  link.click();
  
  // 5. Kaam hone ke baad kachra saaf kiya (DOM se link hata diya)
  document.body.removeChild(link);
}

// Function ko call karne ke liye:
// exportToCSV(students);