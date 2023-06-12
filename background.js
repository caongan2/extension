chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'addData') {
        // Read the JSON file
        chrome.storage.local.get('data', function(result) {
            const jsonData = result.data || { data: [] };

            // Add the new data
            jsonData.data.push(request.data);

            // Update the JSON file
            chrome.storage.local.set({ data: jsonData }, function() {
                sendResponse({ message: 'Data added successfully.' });
            });
        });

        // Keep the message channel open for sending the response asynchronously
        return true;
    }
});
