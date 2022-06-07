import axios from 'axios';
import {
  Box, Button, Form, FormField, Header, Heading, TextInput,
} from 'grommet/components';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IFormValue {
  url: string;
}

export const Add = observer(() => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    url: '',
  });

  const onChange = (values: IFormValue) => {
    setFormValues(values);
  };

  const onSubmit = async ({ value }: {value: IFormValue}) => {
    axios({
      method: 'post',
      url: '/channels',
      data: formValues,
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <Header
        direction="column"
        align="start"
        gap="xxsmall"
        pad={{ horizontal: 'xxsmall' }}
      >
        <Heading level={2} margin="none">
          Добавление нового канала
        </Heading>
      </Header>
      <Box
        pad={{ horizontal: 'xxsmall' }}
      />
      <Form
        validate="blur"
        value={formValues}
        messages={{
          required: ' ',
        }}
        onChange={(nextValue) => onChange(nextValue)}
        onSubmit={({ value }) => onSubmit({ value })}
        method="post"
        style={{ width: '100%' }}
      >
        <FormField
          required={{ indicator: false }}
          label=" "
          htmlFor="url"
          name="url"
          style={{ width: '100%' }}
        >
          <TextInput
            id="url"
            name="url"
            placeholder="Введите адрес"
            type="url"
          />
        </FormField>
        <Box
          align="center"
          direction="row-responsive"
          gap="small"
          margin={{ top: 'medium', bottom: 'small' }}
        >
          <Button label="Добавить канал" primary type="submit" disabled={formValues.url === ''} />
        </Box>
      </Form>
    </>
  );
});
