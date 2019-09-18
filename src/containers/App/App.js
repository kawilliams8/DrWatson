import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, clearError} from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export const App = (props) => {

  const signOut = async () => {
    try {
      await endConversation()
      this.props.removeUser();
      this.props.clearError();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  const { user } = props;

  return (
    <div className="App">
        <Header signOut={signOut} />
        {!user && <WelcomeModal />}
        {user && <ChatBox />}
      </div>
    );
  }

export const mapStateToProps = ({ user }) => ({
  user,
});

export const mapDispatchToProps = dispatch =>  bindActionCreators({ removeUser, hasErrored, clearError}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
