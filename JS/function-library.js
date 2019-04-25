function buildGamingPc(formData) {
    if (formData["lapDeskQuestion"] == 'Desktop') {
        if (
            formData["gameQuestion"] == 'Minecraft' &&
            formData["resolutionQuestion"] == 1 &&
            formData["streamingQuestion"] == 1
        ) {
            let resultObject = {
                'imageLink': '',
                'externalUrl': ''
            }

            return resultObject;
        }
    } else {
        console.log('Laptop Selected');
    } 

    let result;
    return result;
}