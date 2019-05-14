function buildWebBrowsingPc(formData) {
    if (formData["lapDeskQuestion"] == 'Desktop') {
        if (
            formData["webcamQuestion"] == 'No' &&
            formData["storageQuestion"] == '256GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webbrowsingdesktop.jpg',
                'externalUrl': 'https://www.bestbuy.com/site/dell-inspiron-desktop-intel-core-i3-8gb-memory-1tb-hard-drive-black-with-silver-trim/6228202.p?skuId=6228202'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'No' &&
            formData["storageQuestion"] == '512GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webbrowsingdesktop.jpg',
                'externalUrl': 'https://www.bestbuy.com/site/dell-inspiron-desktop-intel-core-i3-8gb-memory-1tb-hard-drive-black-with-silver-trim/6228202.p?skuId=6228202'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'No' &&
            formData["storageQuestion"] == '1TB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webbrowsingdesktop.jpg',
                'externalUrl': 'https://www.bestbuy.com/site/dell-inspiron-desktop-intel-core-i3-8gb-memory-1tb-hard-drive-black-with-silver-trim/6228202.p?skuId=6228202'
            }

            return resultObject;
        }


        if (
            formData["webcamQuestion"] == 'Yes' &&
            formData["storageQuestion"] == '256GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webbrowsingdesktop.jpg',
                'externalUrl': 'https://www.bestbuy.com/site/dell-inspiron-desktop-intel-core-i3-8gb-memory-1tb-hard-drive-black-with-silver-trim/6228202.p?skuId=6228202'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'Yes' &&
            formData["storageQuestion"] == '512GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webbrowsingdesktop.jpg',
                'externalUrl': 'https://www.bestbuy.com/site/dell-inspiron-desktop-intel-core-i3-8gb-memory-1tb-hard-drive-black-with-silver-trim/6228202.p?skuId=6228202'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'Yes' &&
            formData["storageQuestion"] == '1TB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webbrowsingdesktop.jpg',
                'externalUrl': 'https://www.bestbuy.com/site/dell-inspiron-desktop-intel-core-i3-8gb-memory-1tb-hard-drive-black-with-silver-trim/6228202.p?skuId=6228202'
            }

            return resultObject;
        }

       
    } else {
        if (
            formData["webcamQuestion"] == 'No' &&
            formData["storageQuestion"] == '256GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webBrowsingLaptop.jpeg',
                'externalUrl': 'https://www.microsoft.com/en-us/store/config/surface-laptop-2/8xqjkk3dd91b/jx8c'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'No' &&
            formData["storageQuestion"] == '512GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webBrowsingLaptop.jpeg',
                'externalUrl': 'https://www.microsoft.com/en-us/store/config/surface-laptop-2/8xqjkk3dd91b/jx8c'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'No' &&
            formData["storageQuestion"] == '1TB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webBrowsingLaptop.jpeg',
                'externalUrl': 'https://www.microsoft.com/en-us/store/config/surface-laptop-2/8xqjkk3dd91b/jx8c'
            }

            return resultObject;
        }


        if (
            formData["webcamQuestion"] == 'Yes' &&
            formData["storageQuestion"] == '256GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webBrowsingLaptop.jpeg',
                'externalUrl': 'https://www.microsoft.com/en-us/store/config/surface-laptop-2/8xqjkk3dd91b/jx8c'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'Yes' &&
            formData["storageQuestion"] == '512GB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webBrowsingLaptop.jpeg',
                'externalUrl': 'https://www.microsoft.com/en-us/store/config/surface-laptop-2/8xqjkk3dd91b/jx8c'
            }

            return resultObject;
        }

        if (
            formData["webcamQuestion"] == 'Yes' &&
            formData["storageQuestion"] == '1TB'
        ) {
            let resultObject = {
                'imageLink': 'Images/webBrowsingLaptop.jpeg',
                'externalUrl': 'https://www.microsoft.com/en-us/store/config/surface-laptop-2/8xqjkk3dd91b/jx8c'
            }

            return resultObject;
        }
    } 

    let result;
    return result;
}
