import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)


def get_all():
    connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        db="bank",
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
    )
    query = "SELECT * FROM transactions"
    with connection.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    
def add(transaction):
    connection.ping()
    insert_query = """INSERT INTO transactions (amount, vendor, category) values ({},'{}','{}')""".format(
        int(transaction["amount"]),
        transaction["vendor"],
        transaction["category"]
    )
    with connection.cursor() as cursor:
        cursor.execute(insert_query)
        connection.commit()
        new_id = cursor.lastrowid
        transaction["id"] = new_id
        return transaction
        
    
def delete(id):
    connection.ping()
    query = "DELETE FROM transactions where id={}".format(id)
    with connection.cursor() as cursor:
        cursor.execute(query)
        if cursor.rowcount > 0:
            connection.commit()
            return True
        else:
            raise ElementNotExistError()
        
        
def get_balance():
    connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        db="bank",
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
    )
    query = "SELECT SUM(amount) as balance FROM transactions"
    with connection.cursor() as cursor:
        cursor.execute(query)
        balance =  cursor.fetchone()
        return balance



class ElementNotExistError(Exception):
    pass