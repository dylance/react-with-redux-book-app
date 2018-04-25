import React, {Component} from 'react'
import { connect } from 'react-redux';


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
// connect takes a function and a component and produces a container
export default connect(mapStateToProps)(BookList);
