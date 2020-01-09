import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'AUTHUR'
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