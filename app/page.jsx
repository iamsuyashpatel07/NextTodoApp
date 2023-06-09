import React from 'react';
import Form from './addTodoForm';
import TodoItem from '../components/ServerComponents';

const page = () => {
  return (
    <div className='container'>
      <Form />
      <section className='todosContainer'>
        <TodoItem
          title={'Sample Task'}
          description={
            'Sample Description is something about related to sample Task'
          }
          id={'sampleId'}
          completed={true}
        />
      </section>
    </div>
  );
};

export default page;
