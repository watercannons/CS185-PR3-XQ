import React from 'react'

class Table extends React.Component {

    constructor(props){
      super(props)

    }
  
  
    render() {

        let table = {
            borderCollapse: "collapse",
            width: "100%"
        }

        let th = {
            border: "1px solid #dddddd",
            textAlign: "left",
            padding: "8px",
            whiteSpace: "nowrap"
        }
  
      return (
      <div>
          <h2>CS 170 Labs</h2>

            <table style = {table}>
                <tr>
                    <th style = {th}>Lab</th>
                    <th style = {th}>Lab Name</th>
                    <th style = {th}>Due Date</th>
                </tr>
                <tr>
                    <th style = {th}><a href="https://sites.cs.ucsb.edu/~rich/class/cs170/labs/lab1.malloc/index.html">Lab0</a></th>
                    <td style = {th}>Malloc Space: the Initial Frontier</td>
                    <td style = {th}>January 13</td>
                </tr>
                <tr>
                    <th style = {th}><a href="https://sites.cs.ucsb.edu/~rich/class/cs170/labs/kos_start/index.html">Lab1</a></th>
                    <td style = {th}>Could be Pronounced "Chaos"</td>
                    <td style = {th}>January 27</td>
                </tr>
                <tr>
                    <th style = {th}><a href="https://sites.cs.ucsb.edu/~rich/class/cs170/labs/kos_mp/index.html">Lab2</a></th>
                    <td style = {th}>If One is Good, More is Better</td>
                    <td style = {th}>February 24</td>
                </tr>
                <tr>
                    <th style = {th}><a href="https://sites.cs.ucsb.edu/~rich/class/cs170/labs/kos_pipe/index.html">Lab3</a></th>
                    <td style = {th}>Pipe Dream</td>
                    <td style = {th}>March 17</td>
                </tr>
            </table>
  
      </div>
      )
    }
  }
  
  
  
  export default Table;