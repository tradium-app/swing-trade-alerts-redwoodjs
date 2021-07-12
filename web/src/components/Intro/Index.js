import React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody } from 'reactstrap'
import { loginUser } from '../../store/actions'

const IntroComponent = ({ loginUser }) => {
  return (
    <React.Fragment>
      <Card>
        <CardBody className="bg-soft-primary">
          <div className="text-primary">
            <h5 className="text-primary font-size-20">Swing Trade Alerts</h5>
            <div className="font-size-16">
              Trend Alerts for Lazy Swing Traders.
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    authUser: state?.Login.authUser,
  }
}

export default connect(mapStateToProps, { loginUser })(IntroComponent)
