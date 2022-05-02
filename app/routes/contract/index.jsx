import { redirect, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import styled from "styled-components";
import sendEmail from "../api/sendgrid";

export async function action({ request }) {
  const form = await request.formData();
  const fname = form.get("fname");
  const phone = form.get("phone");
  const email = form.get("email");
  const description = form.get("description");
  const errors = {};

  // validate the fields
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "That doesn't look like an email address";
  }

  if (typeof fname !== "string" || fname.length < 6) {
    errors.fname = "name must be > 6 characters";
  }
  if (typeof description !== "string" || description.length < 6) {
    errors.description = "description must be > 6 characters";
  }
  if (typeof phone !== "string") {
    errors.phone = "phone must be Number";
  }
  if (Object.keys(errors).length) {
    return json(errors, { status: 422 });
  }
  sendEmail(form);
  return redirect("/contract");
}

export default function ContractIndexRoute() {
  const errors = useActionData();

  return (
    <Content>
      <ContentHeader>Contact us</ContentHeader>
      <Contenthline />
      <Form method="post">
        <ContentWrapper>
          <Inputtag>
            <Inputlabel>Name</Inputlabel>
            <Inputinput name="fname" />
            {errors?.fname ? <span>{errors.fname}</span> : null}
          </Inputtag>
          <Inputtag>
            <Inputlabel>PhoneNumber</Inputlabel>
            <Inputinput name="phone" />
            {errors?.phone ? <span>{errors.phone}</span> : null}
          </Inputtag>
          <Inputtag>
            <Inputlabel>Email</Inputlabel>
            <Inputinput name="email" />
            {errors?.email ? <span>{errors.email}</span> : null}
          </Inputtag>
          <Inputtag>
            <Inputlabel>Description</Inputlabel>
            <Inputinput name="description" />
            {errors?.description ? <span>{errors.description}</span> : null}
          </Inputtag>
          <Inputbtn type="submit">Submit</Inputbtn>
        </ContentWrapper>
      </Form>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  max-width: 1080px;
  width: 100%;
  margin: 50px auto;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  font-weight: bold;
  color: #546b81;
  padding: 30px;
  font-size: 2.813rem;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 500px;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgb(41 70 97 / 20%);
`;

const Contenthline = styled.div`
  background-color: #d4dadf;
  height: 1px;
`;
const Inputtag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 20px;
`;
const Inputlabel = styled.div`
  padding: 10px 0;
  font-size: 20px;
  color: #d4dadf;
`;
const Inputinput = styled.input`
  font-size: 20px;
  padding: 10px;
  border: 1px solid #d4dadf;
`;

const Inputbtn = styled.button`
  color: #fff !important;
  background: #489be8 !important;
  border: 1px solid #1a82e2 !important;
  border-radius: 2px !important;
  font-size: 36px;
  margin: 30px 80px;
  padding: 10px;
`;
