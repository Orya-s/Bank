import pymysql


def conn():
    try:
        return pymysql.connect(
            host="localhost",
            user="root",
            password="",
            db="bank",
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor
        )
    except:
        print("Error connectiong to database")


def get_all():
    query = "SELECT * FROM transactions"
    with conn().cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    
def add(transaction):
    insert_query = """INSERT INTO transactions (amount, vendor, category) values ({},'{}','{}')""".format(
        int(transaction["amount"]),
        transaction["vendor"],
        transaction["category"]
    )
    connection = conn()
    with connection.cursor() as cursor:
        cursor.execute(insert_query)
        connection.commit()
        new_id = cursor.lastrowid
        transaction["id"] = new_id
        return transaction
        
    
def delete(id):
    query = "DELETE FROM transactions where id={}".format(id)
    connection = conn()
    with connection.cursor() as cursor:
        cursor.execute(query)
        if cursor.rowcount > 0:
            connection.commit()
            return True
        else:
            raise ElementNotExistError()
        
        
def get_balance():
    query = "SELECT SUM(amount) as balance FROM transactions"
    with conn().cursor() as cursor:
        cursor.execute(query)
        balance =  cursor.fetchone()
        return balance



class ElementNotExistError(Exception):
    pass