import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'Klein Blue'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}