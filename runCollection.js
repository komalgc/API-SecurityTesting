const newman = require('newman'); // Require Newman in your script

// Define the collection and environment file paths
const collectionPath = 'C:/QA/API-Security/Collections/TTT-Meetup.postman_collection.json'; // Replace with your Postman collection JSON file
const environmentPath = 'C:/QA/API-Security/Collections/Training.postman_environment.json'; // Replace with your Postman environment JSON file (optional)

// Run the collection using Newman
newman.run({
    collection: require(collectionPath),
    environment: require(environmentPath), // Optional
    reporters: 'cli', // Output results in the CLI
}, (err, summary) => {
    if (err) {
        console.error('Error running Newman collection:', err);
        process.exit(1); // Exit with failure code
    } else {
        console.log('Collection run complete!');
        if (summary.run.failures.length) {
            console.error('Some requests failed:', summary.run.failures);
            process.exit(1); // Exit with failure code
        } else {
            console.log('All requests passed successfully!');
        }
    }
});
