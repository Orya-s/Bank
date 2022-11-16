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
    query = "SELECT * FROM transactions"
    with connection.cursor() as cursor:
        cursor.execute(query)
        return cursor.fetchall()
    
    
def add(transaction):
    insert_query = """INSERT INTO transactions values ({},'{}','{}')""".format(
        transaction["amount"],
        transaction["vendor"],
        transaction["category"]
    )
    with connection.cursor() as cursor:
        cursor.execute(insert_query)
        connection.commit()


def delete(id):
    query = "DELETE FROM transactions where id={}".format(id)
    with connection.cursor() as cursor:
        cursor.execute(query)
        if cursor.rowcount > 0:
            connection.commit()
            return True
        else:
            raise ElementNotExistError()
        
        

class ElementNotExistError(Exception):
    pass