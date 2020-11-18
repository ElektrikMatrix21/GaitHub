import React from 'react';
import { Text, View, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import db from "../config.js";
import TransactionScreen from './BookTransactionScreen.js';

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allTransaction : []

    }
  }
  componentDidMount = async()=>{
    const query = db.collection("transaction").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransaction : [...this.state.allTransactions,doc.data()]
      })
    })

  }
    render() {
      return(
        <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.bar}
            placeholder="Enter Book ID or Student ID"
            onChangeText={(Text)=>{
              this.setState({
                search: text
              })
            }}
          />
          <TouchableOpacity
            style={styles.search}
            onPress={()=>{
              this.searchTransactions(this.state.search)
            }}
          />
        </View>
        <FlatList
          data={this.state.allTransactions}
          renderItem={({item})=>(
            <View style={{borderBottomWidth:2}}>
              <Text>{"Book ID: "+transaction.bookId}</Text>
              <Text>{"Student ID: "+transaction.studentId}</Text>
              <Text>{"Transaction Type: "+transaction.transactionType}</Text>
              <Text>{"Date: "+transaction.date.toDate()}</Text>
              <Text>Search</Text>
            </View>
          )}
          keyExtractor={(item,index)=>index.toString()}
          onEndReached={this.fetchMoreTransaction}
          onEndReachedThreshold={0.7}
        />
        </View>
      )
  //        {
  //          this.state.allTransactions.map((transaction)=>{
  //         return(
  //           <View key={index} style={{borderBottomWidth:2}}>
  //             <Text>{"Book ID: "+transaction.bookId}</Text>
  //              <Text>{"Student ID: "+transaction.studentId}</Text>
  //              <Text>{"Transaction Type: "+transaction.transactionType}</Text>
  //              <Text>{"Date: "+transaction.date.toDate()}</Text>
  //              <Text>Search</Text>
  //           </View>
  //          );
  //          })
  //        }
  //      </ScrollView>
    }
  }

