import React, {Component} from 'react'
import { connect } from 'react-redux';
import { selectBook}from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// this is the function that creates the link between Redux & React. the glue!
function mapStateToProps(state){
  // Whatever is returned from here will who up as props
  // inside of booklist
  return {
    books: state.books

  };
}
// anything returned to this function will end up as props on the BooksList container
function mapDispatchToProps(dispatch){
  // whenever select book is called, the result
  // should be passed to all of our reducers
  // dispatch spreads all the actions to all the reducers in the app
  return bindActionCreators({selectBook: selectBook}, dispatch)

}
// connect takes a function and a component and produces a container

// Promote BookList from a component to a cointainer - it needs to know about
// this new dispatch method, SelectedBook. Make it available as a props

// this is probably the most confusing code in redux.
// check react-redux doc. to understand this better. great guide.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
