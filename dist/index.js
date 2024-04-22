// Import the 'os' module for operating system details
const os = require('os');
const path = require('path');

// Function to print a property and its value
const printProperty = (propertyName, propertyValue) => {
  console.log(`${propertyName}: ${propertyValue}`);
};

// --- Process Information ---
printProperty('Node.js Version', process.version);
printProperty('Executable Path', process.execPath);
printProperty('Platform', process.platform);
printProperty('Process ID', process.pid);
printProperty('Current Working Directory', process.cwd());
printProperty('Environment Variables', JSON.stringify(process.env, null, 2)); // Pretty-printed JSON
printProperty('PATH Environment Variable', process.env.PATH);

// --- Memory Usage ---
const memoryUsage = process.memoryUsage();
printProperty('Resident Set Size (RSS)', `${memoryUsage.rss} bytes`);
printProperty('Heap Total', `${memoryUsage.heapTotal} bytes`);
printProperty('Heap Used', `${memoryUsage.heapUsed} bytes`);
printProperty('External Memory', `${memoryUsage.external} bytes`);

// --- Operating System Details ---
printProperty('OS Type', os.type());
printProperty('OS Platform', os.platform());
printProperty('OS Release', os.release());
printProperty('OS Architecture', os.arch());
printProperty('Number of CPUs', os.cpus().length);
printProperty('Total Memory', `${os.totalmem()} bytes`);
printProperty('Free Memory', `${os.freemem()} bytes`);
printProperty('Uptime', `${os.uptime()} seconds`);
printProperty('Hostname', os.hostname());

// --- Additional Information (Optional) ---
// You can expand this section to include more details as needed
printProperty('Node.js Arguments', process.argv);
// ... add more properties as desired