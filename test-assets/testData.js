module.exports = {
    warrantInfo: [
        {
            Header: '1234567890',
            MKE: 'ABC',
            ORI: 'OAI123456',
            Name: 'Harry Dresden',
            Sex: '@Male',
            Race: '@White',
            Height: '607',
            Weight: '250',
            Hair: 'Brown',
            Offense: 'Arson',
            DOW: '11262007',
            OLN: 'A123456',
            OLS: 'IL',
            OLD: '10312010',
            LIC: 'ABC123',
            LIS: 'IL',
            LID: '11282015',
            results: '1234567890.ABC.OAI123456.Harry Dresden.M.W.607.250.Brown.Arson.2007-11-26.A123456.IL.2010-10-31.ABC123.IL.2015-11-28',
        }
    ],

    invalidWarrantInfo: [
        {
            Header: '123456',
            MKE: 'a',
            ORI: 'not good',
            Name: 'JJ',
            Sex: '@Male',
            Race: '@White',
            Height: '6543',
            Weight: '6543',
            Hair: '6" Ruby',
            Offense: 'poo',
            DOW: '10312018',
            OLN: '12345678990qwertyuiop',
            OLS: 'Utah',
            OLD: '5310025',
            LIC: 'Yee',
            LIS: 'Utah',
            LID: '5310025',
            results: 'Errors Received',
        },
    ],

    modifyWarrantInfo: [
        {
            Warrant: '1234567890',
            Header: '1234567890',
            MKE: 'ABC',
            ORI: 'OAI654321',
            Name: 'Fred Flintstone',
            Sex: '@Male',
            Race: '@White',
            Height: '511',
            Weight: '275',
            Hair: 'Black',
            Offense: 'Theft',
            DOW: '01252011',
            OLN: 'B654321',
            OLS: 'UT',
            OLD: '05092014',
            LIC: '321CBA',
            LIS: 'UT',
            LID: '06152016',
            results: 'Assembled Query: 1234567890.1234567890.ABC.OAI654321.Fred Flintstone.M.W.511.275.Black.Theft.2011-01-25.B654321.UT.2014-05-09.321CBA.UT.2016-06-15'
        },
    ],

    invalidModifyInfo: [
        {
            Warrant: '123456',
            Header: '654321',
            MKE: 'a',
            ORI: 'CRIPES',
            Name: 'DJ',
            Sex: '@Male',
            Race: '@White',
            Height: '3456',
            Weight: '3456',
            Hair: '12" Eww',
            Offense: ':)',
            DOW: '5310025',
            OLN: '1234567890qwertyuiop',
            OLS: 'Idaho',
            OLD: '5310025',
            LIC: 'UGH',
            LIS: 'Idaho',
            LID: '5310025',
            results: 'Errors Received'
        },
    ],

    cancelInfo: [
        {
        Warrant: '1234567890',
        Reason: 'Alabi was confirmed',
        Cancel: '06102018',
        results: 'Errors Received'
        },
    ]
    
        
} 