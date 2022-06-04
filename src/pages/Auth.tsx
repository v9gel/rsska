/* eslint-disable prefer-regex-literals */
import { ReactNode, useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Header,
  Heading,
  Text,
  TextInput,
  Anchor,
  Notification,
} from 'grommet';
import { FormCheckmark } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

interface IPasswordRule {
  regexp?: RegExp;
  message?: string | ReactNode;
  status?: 'error' | 'info';
  valid?: boolean,
}

const passwordRequirements: IPasswordRule = {
  regexp: new RegExp('(?=.*?[a-zA-Z0-9#?!@$ %^&*-]).{8,}'),
  message: 'Пароль не соответствует требованиям',
  status: 'error',
};

const passwordRulesStrong: IPasswordRule[] = [
  {
    regexp: new RegExp('.{8,}'),
    message: 'Не менее 8 символов',
    status: 'error',
  },
];

interface IFormValue {
  login: string;
  password: string;
}

interface IProps {
  isSignIn: boolean;
}

export const Auth = observer(({ isSignIn }: IProps) => {
  const { user } = useStore();

  const [formValues, setFormValues] = useState({
    login: '',
    password: '',
  });

  const [unauthorizeNotificationVisible, setUnauthorizeNotificationVisible] = useState(false);

  const [passwordRules, setPasswordRules] = useState(passwordRulesStrong);
  const onChange = (values: IFormValue) => {
    setFormValues(values);
    const adjustedPasswordRules = passwordRules.map((rule) => {
      const adjustedRule = { ...rule };
      const valid = adjustedRule.regexp?.test(values.password);
      adjustedRule.valid = valid;
      return adjustedRule;
    });
    setPasswordRules(adjustedPasswordRules);
  };

  const onSubmit = async ({ value }: {value: IFormValue}) => {
    if (isSignIn) {
      const isAuth = await user.signIn(value.login, value.password);
      setUnauthorizeNotificationVisible(!isAuth);
    } else {
      user.signUp(value.login, value.password);
    }
  };

  return (
    <Box pad="small" gap="small" align="center" justify="center" fill="vertical" flex="grow">
      <Box gap="medium" width="medium">
        <Header
          direction="column"
          align="start"
          gap="xxsmall"
          pad={{ horizontal: 'xxsmall' }}
        >
          <Heading level={2} margin="none">
            {isSignIn ? 'Вход' : 'Создание аккаунта'}
          </Heading>
        </Header>
        <Box
          pad={{ horizontal: 'xxsmall' }}
        >
          <Form
            validate="blur"
            value={formValues}
            messages={{
              required: 'Это обязательное поле',
            }}
            onChange={(nextValue) => onChange(nextValue)}
            onSubmit={({ value }) => onSubmit({ value })}
            method="post"
          >
            <FormField
              label="Логин"
              htmlFor="login"
              name="login"
              required={{ indicator: false }}
            >
              <TextInput
                id="login"
                name="login"
                type="text"
                placeholder="Введите логин"
              />
            </FormField>
            <FormField
              required={{ indicator: false }}
              label="Пароль"
              validate={passwordRequirements}
              htmlFor="password"
              name="password"
              info={(
                !isSignIn && passwordRules.map((rule: IPasswordRule) => {
                  if (
                    formValues.password === undefined
                    || formValues.password.length === 0
                  ) {
                    return (
                      <Box direction="row" gap="xsmall">
                        <Text size="xsmall">{rule.message}</Text>
                      </Box>
                    );
                  }
                  return (
                    <Box direction="row" gap="xsmall">
                      {formValues.password && rule.valid && (
                        <Box alignSelf="center">
                          <FormCheckmark size="small" />
                        </Box>
                      )}
                      <Text size="xsmall">{rule.message}</Text>
                    </Box>
                  );
                })
            )}
            >
              <TextInput
                id="password"
                name="password"
                placeholder="Введите пароль"
                type="password"
              />
            </FormField>
            <Box
              align="center"
              direction="row-responsive"
              gap="small"
              margin={{ top: 'medium', bottom: 'small' }}
            >

              <Button label={isSignIn ? 'Войти' : 'Создать аккаунт'} primary type="submit" />
              {
                isSignIn
                  ? (
                    <Link to="/signup">
                      <Anchor as="div">Нет аккаунта?</Anchor>
                    </Link>
                  )
                  : (
                    <Link to="/signin">
                      <Anchor as="div">Уже есть аккаунт?</Anchor>
                    </Link>
                  )
              }
            </Box>
          </Form>
        </Box>
      </Box>
      {unauthorizeNotificationVisible && (
      <Notification
        toast
        status="critical"
        title="Не удалось авторизоваться"
        message="Неверный логин или пароль"
        onClose={() => setUnauthorizeNotificationVisible(false)}
      />
      )}
    </Box>
  );
});
