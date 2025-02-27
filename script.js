const sheetURL = "https://script.google.com/macros/s/AKfycbwbu4jPsXFZAXnJryuyc2ADUZI2oFMr9i-JmC9OzFV8u8oh8a5y37UI94Z1tf95pzrT/exec"; 
const increaseURL = "https://script.google.com/macros/s/AKfycbwbu4jPsXFZAXnJryuyc2ADUZI2oFMr9i-JmC9OzFV8u8oh8a5y37UI94Z1tf95pzrT/exec?action=increment";
const decreaseURL = "https://script.google.com/macros/s/AKfycbwbu4jPsXFZAXnJryuyc2ADUZI2oFMr9i-JmC9OzFV8u8oh8a5y37UI94Z1tf95pzrT/exec?action=decrement";

function updateTime() {
    let now = new Date();
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById("time").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toLocaleDateString(undefined, options);
}

async function fetchSheetData() {
    try {
        let response = await fetch(sheetURL);
        let data = await response.json();
        document.getElementById("target").innerText = data.target;
        document.getElementById("todayCount").innerText = data.todayCount;
        document.getElementById("totalCount").innerText = data.totalCount;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function incrementCount() {
    try {
        await fetch(increaseURL);
        fetchSheetData();
    } catch (error) {
        console.error("Error updating count:", error);
    }
}

async function decrementCount() {
    try {
        await fetch(decreaseURL);
        fetchSheetData();
    } catch (error) {
        console.error("Error decreasing count:", error);
    }
}

setInterval(updateTime, 500);
setInterval(fetchSheetData, 500);
fetchSheetData();
updateTime();
