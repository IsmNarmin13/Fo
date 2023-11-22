import React from 'react'
const Info = () => {

    const func = (e) => {
        let a = 0;
        e.preventDefault();
        const inputs = Array.from(e.target.querySelectorAll('input'));
        inputs.forEach(element => {

            if (element.value.length !== 0 && e.target.querySelector('textarea').value.length !== 0) {
                console.log('input value is NOT empty');
            } else {
                a++;
            }
        });
        if (a > 0) {
            alert("ERROR!");
        } else {
            alert("SUCCES!")
            inputs.forEach(element => {
                element.value="";
            });
            e.target.querySelector('textarea').value="";
        }
    };


    return (
        <div className='info'>
            <h3>Using CSS to style an HTML Form</h3>

            <div>
                <form onSubmit={func}>
                    <label  >First Name</label>
                    <input type="text" placeholder="Your name.." />

                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name.." />

                    <label>Telephone</label>
                    <input type="text" placeholder="Your telephone number.." />

                    <label>E-mail</label>
                    <input type="text" placeholder="Your mail.." />

                    <label>Comments</label>
                    <textarea placeholder="Your comments.."></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Info