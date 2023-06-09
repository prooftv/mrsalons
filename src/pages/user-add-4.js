import React from "react"

import { Container } from "react-bootstrap"

import ProgressBar from "../components/ProgressBar"

import data from "../data/user-add.json"
import ListingForm from "../components/ListingForm"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "Add your listing",
      listingForm: true,
    },
  }
}

const UserAdd4 = () => {
  return (
    <React.Fragment>
      <ProgressBar progress={80} />
      <section className="py-5">
        <Container>
          <p className="subtitle text-primary">{data[4].subtitle}</p>
          <h1 className="h2 mb-5">
            {data[4].title}
            <span className="text-muted float-end">Step 4</span>
          </h1>
          <ListingForm
            data={data[4]}
            prevStep="/user-add-3"
            finish="/user-add-5"
          />
        </Container>
      </section>
    </React.Fragment>
  )
}

export default UserAdd4
