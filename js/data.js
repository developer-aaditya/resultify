const studentData = [
    {
        id : '1',
        rollNo : '2200770100001',
        password : '077@077',
        firstName : 'Aaditya',
        lastName : 'Rajput',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '2',
        rollNo : '2200770100002',
        password : '077@077',
        firstName : 'Aamir',
        lastName : 'Khan',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '18',  
            sub2 : '30',  
            sub3 : '12',  
            sub4 : '23',  
            sub5 : '18',  
            sub6 : '17',
        },
        firstAssignmentMarks : {
            sub1 : '4',  
            sub2 : '7',  
            sub3 : '6',  
            sub4 : '3',  
            sub5 : '9',  
            sub6 : '4',
        },
        secondSessionalMarks : {
            sub1 : '23',  
            sub2 : '24',  
            sub3 : '22',  
            sub4 : '14',  
            sub5 : '28',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '1',  
            sub2 : '5',  
            sub3 : '4',  
            sub4 : '2',  
            sub5 : '8',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '87',  
            sub2 : '99',  
            sub3 : '89',  
            sub4 : '71',  
            sub5 : '84',  
            sub6 : '93',
        },
        practical : {
            sub1 : '25',  
            sub2 : '27',  
            sub3 : '29',  
            sub4 : '28',  
            sub5 : '23',  
            sub6 : '20',
        },
    },
    {
        id : '3',
        rollNo : '2200770100003',
        password : '077@077',
        firstName : 'Aastha',
        lastName : 'Tyagi',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '27',  
            sub2 : '28',  
            sub3 : '21',  
            sub4 : '25',  
            sub5 : '18',  
            sub6 : '17',
        },
        firstAssignmentMarks : {
            sub1 : '9',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '6',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '16',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '17',
        },
        secondAssignmentMarks : {
            sub1 : '7',  
            sub2 : '10',  
            sub3 : '3',  
            sub4 : '8',  
            sub5 : '8',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '73',  
            sub2 : '75',  
            sub3 : '86',  
            sub4 : '69',  
            sub5 : '78',  
            sub6 : '80',
        },
        practical : {
            sub1 : '25',  
            sub2 : '27',  
            sub3 : '24',  
            sub4 : '24',  
            sub5 : '28',  
            sub6 : '29',
        },
    },
    {
        id : '4',
        rollNo : '2200770100004',
        password : '077@077',
        firstName : 'Aayush',
        lastName : 'Soam',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '29',  
            sub3 : '25',  
            sub4 : '27',  
            sub5 : '19',  
            sub6 : '23',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '7',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '25',  
            sub2 : '27',  
            sub3 : '22',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '28',
        },
        secondAssignmentMarks : {
            sub1 : '7',  
            sub2 : '4',  
            sub3 : '8',  
            sub4 : '5',  
            sub5 : '10',  
            sub6 : '7',
        },
        putMarks : {
            sub1 : '86',  
            sub2 : '67',  
            sub3 : '78',  
            sub4 : '81',  
            sub5 : '73',  
            sub6 : '90',
        },
        practical : {
            sub1 : '29',  
            sub2 : '28',  
            sub3 : '30',  
            sub4 : '27',  
            sub5 : '29',  
            sub6 : '26',
        },
    },
    {
        id : '5',
        rollNo : '2200770100005',
        password : '077@077',
        firstName : 'Abhay',
        lastName : '',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '6',
        rollNo : '2200770100006',
        password : '077@077',
        firstName : 'Abhishek',
        lastName : 'Sharma',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '7',
        rollNo : '2200770100007',
        password : '077@077',
        firstName : 'Abhishek',
        lastName : 'Singh Rathy',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '8',
        rollNo : '2200770100008',
        password : '077@077',
        firstName : 'Kunal',
        lastName : 'Kumar',
        course : 'BCA',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '9',
        rollNo : '2200770100009',
        password : '077@077',
        firstName : 'Arjun',
        lastName : 'Chaudhary',
        course : 'BCA',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '10',
        rollNo : '2200770100010',
        password : '077@077',
        firstName : 'Arshad',
        lastName : '',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
    {
        id : '11',
        rollNo : '2200770100001',
        password : '077@077',
        firstName : 'Aman',
        lastName : 'Khan',
        course : 'B.Tech',
        mobileNo : '0123456789',
        subjects : {
            sub1 : 'DSUC',
            sub2 : 'COA',
            sub3 : 'CSS',
            sub4 : 'DSTL',
            sub5 : 'TC',
            sub6 : 'Laser',
        },
        firstSessionalMarks : {
            sub1 : '30',  
            sub2 : '24',  
            sub3 : '21',  
            sub4 : '12',  
            sub5 : '18',  
            sub6 : '14',
        },
        firstAssignmentMarks : {
            sub1 : '10',  
            sub2 : '8',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '8',
        },
        secondSessionalMarks : {
            sub1 : '29',  
            sub2 : '26',  
            sub3 : '25',  
            sub4 : '20',  
            sub5 : '21',  
            sub6 : '27',
        },
        secondAssignmentMarks : {
            sub1 : '10',  
            sub2 : '10',  
            sub3 : '8',  
            sub4 : '9',  
            sub5 : '10',  
            sub6 : '9',
        },
        putMarks : {
            sub1 : '89',  
            sub2 : '97',  
            sub3 : '92',  
            sub4 : '86',  
            sub5 : '79',  
            sub6 : '80',
        },
        practical : {
            sub1 : '10',  
            sub2 : '9',  
            sub3 : '9',  
            sub4 : '10',  
            sub5 : '10',  
            sub6 : '9',
        },
    },
]