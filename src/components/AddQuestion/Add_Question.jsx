import  { useState } from 'react'
import Q_array from '../../Q_array';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

function Add_Question() {

  const [questions, setQuestions] = useState(Q_array);
  const [data, setData] = useState();
  const addQueston = (e) => {
    e.preventDefault();
    if(data !==""){
      setQuestions([...questions, { question: data}]);

    }

    setData("");
  }


  return (
    <>
      <div className='container'>
        <InputGroup className="mt-3  ">
          <Form.Control
            placeholder="Write your question here..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={data}
            onChange={(e)=> setData(e.target.value)}
          />
          <Button variant="outline-danger" id="button-addon2" onClick={addQueston}>
            Add 
          </Button>
        </InputGroup>
      </div>
      <div className='rightData col-md-6 mt-5'>
              <Card>
                {questions.map((el, index) => {
                  return (
                    <Card.Header key={index}>
                      {console.log(index)}
                      Q: {el.question}
                    </Card.Header>
                  )
                })}</Card>
            </div>
    </>
  )
}

export default Add_Question