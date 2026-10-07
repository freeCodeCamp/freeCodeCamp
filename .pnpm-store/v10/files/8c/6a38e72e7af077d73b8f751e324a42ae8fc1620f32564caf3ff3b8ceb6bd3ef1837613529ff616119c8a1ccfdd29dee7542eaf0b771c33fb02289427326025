/* tslint:disable: no-shadowed-variable */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Decorator, Mutator } from "final-form";
import * as React from "react";
import { Field, Form } from "react-final-form";

const noop = () => {};
// missing required props
const C1 = () => {
  // $ExpectError
  return <Form />;
};

// provided required props
const C2 = () => <Form onSubmit={noop} />;

const onSubmit = async (values: any) => {
  // tslint:disable-next-line no-console
  console.log(values);
};

// basic
function basic() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </form>
      )}
    </Form>
  );
}

// simple
function simple() {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    </Form>
  );
}

function simpleSubscription() {
  return (
    <Form
      onSubmit={onSubmit}
      subscription={{
        pristine: true,
        submitting: true,
        values: true,
      }}
    >
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    </Form>
  );
}

const setValue: Mutator = ([name, newValue], state, { changeValue }) => {
  changeValue(state, name, (value) => newValue);
};

function mutated() {
  return (
    <Form onSubmit={onSubmit} mutators={{ setValue }}>
      {({
        handleSubmit,
        form: {
          mutators: { setValue },
        },
        submitting,
        pristine,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <button
            type="button"
            onClick={(e) => setValue("firstName", "Kevin")}
            disabled={submitting || pristine}
          >
            Reset
          </button>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    </Form>
  );
}

interface UserForm {
  firstName: string;
  lastName: string;
}

const typedOnSubmit = (values: UserForm) => {
  // tslint:disable-next-line no-console
  console.log(values);
};

// with typed form data and field
function withTypedFormData() {
  return (
    <Form<UserForm> onSubmit={typedOnSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field<string>
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
              initialValue=""
            />
          </div>
        </form>
      )}
    </Form>
  );
}

const decorator: Decorator<UserForm> = (form) => {
  return form.subscribe(({ values: { firstName } }) => firstName, {
    values: true,
  });
};

// with typed decorator
function withTypedDecorator() {
  return <Form<UserForm> decorators={[decorator]} onSubmit={typedOnSubmit} />;
}

// with wrong typed decorator
function withWrongTypedDecorator() {
  return (
    <Form<Omit<UserForm, "firstName">>
      // $ExpectError
      decorators={[decorator]}
      onSubmit={noop}
    />
  );
}
